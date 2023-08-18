<script setup>
import { reactive } from 'vue';
import { useCollection, useFirestore } from 'vuefire';
import { collection } from 'firebase/firestore';

const db = useFirestore();
const events = useCollection(collection(db, 'events'));
const event = reactive({});

function selectEvent(ind) {
  event = events[ind];
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <h2>Agenda</h2>
      </el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="18">
            <el-table
              :data="events"
              style="width: 100%"
              :onclick="selectEvent(1)"
            >
              <el-table-column label="Date" width="180">
                <template #default="scope">{{
                  scope.row.date.toDate().toLocaleString()
                }}</template>
              </el-table-column>
              <el-table-column prop="nom" label="Nom" width="120" />
              <el-table-column
                prop="description"
                label="Description"
                width="180"
              />
            </el-table>
          </el-col>
          <el-col :span="6">
            <el-form :model="event">
              <el-form-item label="Activity name">
                <el-input v-model="event.nom" />
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
