import React from "react";
import Todo from "./Todo";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
`;

const TaskList = styled.div`
  padding: 8px;
`;

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Droppable droppableId={"Num1"}>
          {(provided) => (
            <TaskList ref={provided.innerRef} {...provided.droppableProps}>
              {this.props.todos.map((todo, index) => (
                <Todo
                  index={index}
                  key={todo.iD}
                  content={todo.content}
                  iD={todo.iD}
                  status={todo.status}
                  changeStatus={this.props.changeStatus}
                  editTodo={this.props.editTodo}
                  removeTodo={this.props.removeTodo}
                />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    );
  }
}
