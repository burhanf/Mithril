var root = document.body

var task
var taskArray = []

function newTask(data, i) {
    return m('div.mb-2', [
        m('div.row.align-items-center', [
            m("input[type=checkbox]"),
            m('span.col', data),
            m('button.btn.btn-danger', {
                onclick: function () {
                    taskArray.splice(i, 1)
                }
            }, 'X')
        ])
    ]);
}

m.mount(root, {
    view: function () {
        return m("main.container.text-center", [
            m('div.row.justify-content-center.mt-5', [
                m('div.col-8', [
                    m('input.form-control[type=text]', {
                        placeholder: 'Enter a task',
                        value: task,
                        oninput: function () {
                            task = this.value
                        }
                    }),

                    m('button.btn.btn-primary.mt-2', {
                        onclick: function () {
                            if (task) {
                                taskArray.push(task)
                                task = ""
                            }

                            console.log(taskArray)
                        }
                    }, "Add")
                ])
            ]),

            m('div.justify-content-center.mt-4', taskArray.map((data, index) => newTask(data, index)))
        ])
    }
})
