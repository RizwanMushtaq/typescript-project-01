console.log('PropertyDecorators')


function Logger(constructor: Function) {
    console.log('Logging...')
    console.log(constructor)
}

function WithTemplate(template: string, hookId: string) {
    return function(construtor: any) {
        console.log('Rendering Template')
        const hookEl = document.getElementById(hookId)
        const p = new construtor()
        if(hookEl) {
            hookEl.innerHTML = template
            hookEl.querySelector('h1')!.textContent = p.name
        }
    }
}

@Logger
@WithTemplate('<h1></h1>', 'app')
class Person {
    name = 'Rizwan'

    constructor(){
        console.log('Creating person object')
    }
}