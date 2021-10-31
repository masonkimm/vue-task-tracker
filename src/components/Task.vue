<template>
  <div class="task" :class="[task.reminder ? 'reminder' : '', 'task']">
    <h3>
      <div class="task-leftSide">
        <input
          type="checkbox"
          class="task-checkbox"
          @click="$emit('toggle-reminder', task.id)"
          :checked="task.reminder ? true : false"
        />
        <p :class="task.reminder ? 'line-through' : ''" id="task-text">
          {{ task.text }}
        </p>
      </div>
      <i @click="onDelete(task.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object,
  },
  methods: {
    onDelete(id) {
      // console.log('clicked', id);
      this.$emit('delete-task', id);
    },
  },
};
</script>

<style scope>
.fas {
  color: red;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.line-through {
  text-decoration: line-through;
  color: gray;
}
.task-leftSide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.task-checkbox {
  margin-right: 10px;
  transform: scale(1.3);
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
