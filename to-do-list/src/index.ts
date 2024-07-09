import {v4 as uuid} from "uuid"

type task = {
  id: string,
  title: string,
  completed: boolean,
  createdAt: Date
}

const loadTasks = (): task[] => {
  const JSONString = localStorage.getItem("TASKS")
  if(!JSONString) return []
  return JSON.parse(JSONString)
}

const addListItem = (task: task) => {
  const newItem = document.createElement('li')
  const label = document.createElement('label')
  const checkbox = document.createElement('input')
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked
    saveTasks()
  })
  checkbox.type = 'checkbox'
  label.append(checkbox,task.title)
  newItem.append(label)
  list?.append(newItem)

}


const list = document.querySelector<HTMLUListElement>("#list")
const taskForm = document.querySelector<HTMLFormElement>("#new-task-form") 
const taskTitle = document.querySelector<HTMLInputElement>("#new-task-title")

const tasks: task[] = loadTasks()
tasks.forEach(addListItem)

taskForm?.addEventListener("submit" , e => {
  e.preventDefault()
  if(taskTitle?.value == "" || taskTitle?.value == null) return

  const newTask: task = {
    id: uuid(),
    title: taskTitle.value,
    completed: false,
    createdAt: new Date()
  }
  tasks.push(newTask)

  addListItem(newTask)
  taskTitle.value = ""
})


const saveTasks = () => {
  localStorage.setItem("TASKS", JSON.stringify(tasks))
}

