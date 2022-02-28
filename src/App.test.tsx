import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App, { addTodo, removeTodo, Todos } from './App'


// type todos=  Todos

describe('addTodo', () => {
    it('Add a todo when preses ADD', () => {
        const AddButton = addTodo([], 'todo')
        expect(AddButton).toMatchObject([{ id: 1, title: 'todo' }])
    })

})


describe('removeTodo', () => {
    it('removes a todo when pressed X', () => {
        const result = removeTodo([], 1)
        expect(result).toMatchObject([])
    })
})