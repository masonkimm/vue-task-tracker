<template>
  <img id="vue-logo" alt="Vue logo" src="./assets/logo.png" />
  <div class="container">
    <Heading
      :showAddTask="showAddTask"
      @toggle-add-task="toggleAddTask"
      title="Task Tracker"
    />
    <div v-show="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    <Tasks
      @toggle-reminder="toggleReminder"
      :tasks="tasks"
      @delete-task="deleteTask"
    />
    <Footer />
  </div>
</template>

<script>
import Heading from './components/Heading.vue';
import Tasks from './components/Tasks.vue';
import AddTask from './components/AddTask.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Heading,
    Tasks,
    AddTask,
    Footer,
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
    };
  },
  methods: {
    storeTasks(tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    },
    getTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks'));
      if (storedTasks !== null) {
        this.tasks = storedTasks;
      }
      // this.tasks = [...this.tasks, storedTasks];
      // this.tasks.push(storedTasks);
    },
    addTask(task) {
      const newTask = (this.tasks = [...this.tasks, task]);
      this.storeTasks(newTask);
    },
    deleteTask(id) {
      const filteredTasks = (this.tasks = this.tasks.filter(
        (task) => task.id !== id
      ));
      this.storeTasks(filteredTasks);
    },
    toggleReminder(id) {
      const toggledTasks = (this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      ));
      this.storeTasks(toggledTasks);
    },
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  },
  beforeMount() {
    this.getTasks();
  },
  created() {
    // this.tasks = this.getTasks();
    this.tasks = [];
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
#vue-logo {
  height: 7vmin;
  position: fixed;
  right: 0;
  bottom: 0;
}
</style>
