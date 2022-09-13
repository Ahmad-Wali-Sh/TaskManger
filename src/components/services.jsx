export default function getList() {
    return fetch('http://192.168.60.55:8000/api/taskmanager/task/')
        .then((response) => response.json())
}