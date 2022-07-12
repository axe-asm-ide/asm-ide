const regs = ['a1', 'a2', 'a3', 'f1', 'pa', 'c1']

const instructions = [
    '.memory',
    'set',
    'load',
    'save',
    'add',
    'compare',
    'jump_if_less',
    'jump',
    'save_from_register',
    'save_from_register1',
    'set2',
    'load2',
    'add2',
    'save2',
    'subtract2',
    'load_from_register',
    'load_from_register1',
    'load_from_register2',
    'save_from_register2',
    'jump_from_register',
    'shift_right',
    'and',
    'multiply2',
    'jump_if_equal',
    'halt',
]

const initCodeMirrorDefine = function() {
    CodeMirror.defineMIME('asm', 'asm')

    CodeMirror.defineMode('asm', function() {
        const tokenize = function(stream, state) {
            state.beforeParams = false
            const ch = stream.next()

            if(ch === ';') {
                stream.skipToEnd()
                return 'comment'
            } else if(ch === '@') {
                stream.eatWhile(/\w/)
                return 'label'
            } else if(/\./.test(ch)) {
                stream.eatWhile(/\w/)
                return 'keyword'
            } else if(/\d/.test(ch)) {
                stream.eatWhile(/\S/)
                return 'number'
            } else {
                stream.eatWhile(/[\w$_{}\xa1-\uffff]/)
                const word = stream.current()
                if (instructions.includes(word)) {
                    return 'instruction'
                } else if (regs.includes(word)) {
                    return 'register'
                }
                return null
            }
        }
        
        return {
            startState: function() {
                return {
                    tokenize: tokenize,
                    beforeParams: false,
                    inParams: false,
                }
            },
            token: function(stream, state) {
                if (stream.eatSpace()) {
                    return null
                }
                
                return state.tokenize(stream, state)
            },
        }
    })
}

initCodeMirrorDefine()