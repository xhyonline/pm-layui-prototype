<template>
  <lay-layer v-model="visible" title="Edit Entity" :area="['640px', 'auto']">
    <div class="dialog-body">
      <lay-form :model="form" label-width="120px">
        <lay-form-item label="Name">
          <lay-input v-model="form.name" placeholder="Enter name" />
        </lay-form-item>
        <lay-form-item label="Type">
          <lay-select v-model="form.type" placeholder="Select type">
            <lay-select-option value="a">Type A</lay-select-option>
            <lay-select-option value="b">Type B</lay-select-option>
          </lay-select>
        </lay-form-item>
        <lay-form-item label="Status">
          <lay-switch v-model="form.enabled" />
        </lay-form-item>
        <lay-form-item label="Remark">
          <lay-textarea v-model="form.remark" placeholder="Enter remark" />
        </lay-form-item>
      </lay-form>
    </div>

    <template #footer>
      <lay-button @click="visible = false">Cancel</lay-button>
      <lay-button type="primary">Confirm</lay-button>
    </template>
  </lay-layer>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const visible = ref(true);

const form = reactive({
  name: "",
  type: "",
  enabled: true,
  remark: "",
});
</script>

<style scoped>
.dialog-body {
  padding: 16px 16px 0;
}
</style>
