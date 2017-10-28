import {EXAMPLE_ACTION} from '../../actions'

export function example (state = false, action) {
    const {type} = action
    switch (type) {
        case EXAMPLE_ACTION:
            return {
                ...state,
                example: !state.example
            }
        default: 
            return state
    }
}