from pathlib import Path
from playwright.sync_api import sync_playwright


OUTPUT_DIR = Path(__file__).resolve().parent / "artifacts"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)


def dump_style(page, selector: str, name: str) -> None:
    locator = page.locator(selector).first
    locator.wait_for(timeout=10000)
    info = locator.evaluate(
        """(el) => {
            const style = window.getComputedStyle(el);
            const rect = el.getBoundingClientRect();
            return {
                backgroundColor: style.backgroundColor,
                color: style.color,
                boxShadow: style.boxShadow,
                width: rect.width,
                height: rect.height,
                className: el.className
            };
        }"""
    )
    print(name, info)


with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 960})
    page.on("console", lambda msg: print("console", msg.type, msg.text))
    page.goto("http://127.0.0.1:5173", wait_until="domcontentloaded")
    page.wait_for_load_state("networkidle")

    dump_style(page, ".pm-shell-header", "header")
    dump_style(page, ".pm-shell-body", "body")
    dump_style(page, ".pm-shell-tabbar", "tabbar")
    dump_style(page, ".pm-shell-content", "content")
    dump_style(page, ".layui-side", "side")

    screenshot_path = OUTPUT_DIR / "lightweight-scaffold-home.png"
    page.screenshot(path=str(screenshot_path), full_page=True)
    print("screenshot", screenshot_path)
    browser.close()
