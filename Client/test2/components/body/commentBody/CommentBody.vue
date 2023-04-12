<template>
    <div class="apps">
      <div><h1>Test Comment</h1></div>
      <div class="list">
        <input v-model="addList" type="text" placeholder="add comment" />
        <button class="add-button" @click="addTodo()">Add Comment</button>

        <div v-show="checkInputEmpty === false">
          <b-alert show dismissible>
           <p style="color: red; margin-bottom: 0;">Please fill input.</p>
          </b-alert>
        </div>

        <div v-for="(todo, index) in todoList" :key="index">
          <span v-if="checkChangeTodo == true">{{ todo }}</span>
          <input
            v-if="checkChangeTodo == false"
            v-model="todoList[index]"
            type="text"
          />
          <button @click="onClickChangeTodo(index)">
            {{ checkChangeTodo ? "Change" : "Save" }}
          </button>
          <button @click="deleteTodo(index)">Delete</button>
        </div>
      </div>
  
      <br />
      <div>
        <span>search Todo: </span><input v-model="searchText" type="text" />
        <ul>
          <li v-for="(item, index) in filteredItems" :key="index">{{ item }}</li>
        </ul>
      </div>
  
      <div>{{ checkComputed }}</div>
      <div>TodoList have {{ numberComment }} todo</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        todoList: [],
        addList: "",
        checkChangeTodo: true,
        checkInputEmpty: true,
        changeTodo: "",
        numberComment: 0,
        searchText: "",
      };
    },
    // computed: check thay đổi như onchange
    computed: {
      checkComputed() {
        return this.todoList.length > 0
          ? "List Comment Is Not Empty"
          : "List Comment Is Empty";
      },
      filteredItems() {
        return this.todoList.filter((item) =>
          item?.toLowerCase().includes(this.searchText?.toLowerCase())
        );
      },
    },
    methods: {
      addTodo() {
        if (this.addList !== "") {
          this.todoList.push(this.addList);
          this.addList = "";
          this.numberComment += 1;
          this.checkInputEmpty = true;
          this.$emit("updateNumberComment", this.numberComment);
          this.$emit("number-comment-changed", this.numberComment);
        } else {
          this.checkInputEmpty = false;
          // window.alert("Please fill this input");
        }
      },
      deleteTodo(index) {
        this.todoList.splice(index, 1);
        this.numberComment -= 1;
        this.$emit("updateNumberComment", this.numberComment);
        this.$emit("number-comment-changed", this.numberComment);
      },
      onClickChangeTodo(index) {
        if (this.todoList[index] !== "") {
          this.checkChangeTodo = !this.checkChangeTodo;
          this.checkInputEmpty = true;
        } else {
          this.checkInputEmpty = false;
          // window.alert("Please fill this input");
        }
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .apps {
    text-align: center;
    background: #d5f6f6;
  }
  
  .list {
    background: #5f9ea0;
    border-radius: 30px;
    width: 100%;
    text-align: center;
    min-height: 200px;
    padding: 10px;
  }
  .list {
    button {
      border: 2px solid black;
      border-radius: 10px;
    }
  }
  </style>
  