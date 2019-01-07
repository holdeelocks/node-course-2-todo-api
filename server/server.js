var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true }
);

var Todo = mongoose.model("Todo", {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var newTodo = new Todo({
//   text: "Cook dinner"
// });

// newTodo.save().then(
//   doc => {
//     console.log("saved todo:", doc);
//   },
//   err => {
//     console.log("unable to save todo");
//   }
// );

var otherTodo = new Todo({
  text: "Cook dindin",
  completed: true,
  completedAt: Date.now()
});

otherTodo.save().then(
  doc => {
    console.log("saved todo", doc);
  },
  err => console.log("unable to save todo")
);
