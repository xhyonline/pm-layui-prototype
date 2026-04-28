<template>
  <section class="page-hero">
    <div class="page-hero__head">
      <div>
        <div v-if="eyebrow" class="page-hero__eyebrow">{{ eyebrow }}</div>
        <h1 class="page-hero__title">{{ title }}</h1>
        <p class="page-hero__desc">{{ description }}</p>
      </div>
      <div v-if="$slots.actions" class="page-hero__actions">
        <slot name="actions" />
      </div>
    </div>
    <div v-if="$slots.default" class="page-hero__body">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
  description: string;
}>();
</script>

<style scoped>
.page-hero {
  padding: 28px;
  border: 1px solid rgba(0, 150, 136, 0.1);
  border-radius: 20px;
  background:
    radial-gradient(circle at top left, rgba(0, 150, 136, 0.16), transparent 34%),
    linear-gradient(135deg, #ffffff 0%, #f7fbfa 100%);
  box-shadow: 0 18px 40px rgba(15, 33, 52, 0.06);
}

.page-hero__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
}

.page-hero__eyebrow {
  margin-bottom: 10px;
  color: #009688;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
}

.page-hero__title {
  margin: 0;
  font-size: 34px;
  line-height: 1.2;
  color: #163042;
}

.page-hero__desc {
  max-width: 760px;
  margin: 12px 0 0;
  line-height: 1.8;
  color: #5f6b7a;
}

.page-hero__actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.page-hero__body {
  margin-top: 22px;
}

@media (max-width: 768px) {
  .page-hero {
    padding: 20px;
  }

  .page-hero__head {
    flex-direction: column;
  }

  .page-hero__title {
    font-size: 28px;
  }
}
</style>

