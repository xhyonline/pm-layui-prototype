<template>
  <lay-card class="section-card">
    <template #header>
      <div class="section-card__header">
        <div>
          <div class="section-card__title">{{ title }}</div>
          <div v-if="description" class="section-card__desc">{{ description }}</div>
        </div>
        <div v-if="$slots.extra" class="section-card__extra">
          <slot name="extra" />
        </div>
      </div>
    </template>
    <slot />
  </lay-card>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description?: string;
}>();
</script>

<style scoped>
.section-card {
  border-radius: 16px;
}

.section-card__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.section-card__title {
  color: #1f2a37;
  font-size: 18px;
  font-weight: 600;
}

.section-card__desc {
  margin-top: 6px;
  color: #6b7280;
  font-size: 13px;
}

.section-card__extra {
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .section-card__header {
    flex-direction: column;
  }
}
</style>

