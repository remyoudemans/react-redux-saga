import * as React from 'react'
import * as glamorous from 'glamorous'

type HTMLElementEvent<T extends HTMLElement> = Event & {
    target: T,
    value: string, 
}

export class TextArea extends React.Component<{}, { value: string}> {
    constructor(props: any){
        super(props)
        this.state = {
            value: 'Type in here!'
        }
    }
    private handleChange(event: HTMLElementEvent<HTMLTextAreaElement>){
        console.log("motion detected ;)")
        this.setState({value: event.target.value})
    }
    public render() {
        return (
            <div>
                <textarea value={this.state.value} onChange={() => this.handleChange} />
            </div>
        )
    }
}


