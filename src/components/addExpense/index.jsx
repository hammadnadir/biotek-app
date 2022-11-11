import { Button } from 'react-bootstrap';
import React from 'react';
import { Container, Form } from 'react-bootstrap';
import "./styles.scss"
import { SelectForm, TextFieldForm, TextFieldNew } from '../common';
import { Link } from 'react-router-dom';

function AddExpense() {
  return (
    <div className='add_expense'>
        <Container>
            <div className='add_expense_data'>
                <div className='expense_button'>
                    <Button>Save</Button>
                    <Button>Add Line</Button>
                </div>
                <Form>
                    <div className='voucher_field'>
                        <TextFieldForm />
                    </div>
                    <div className='two_inputs'>
                         <TextFieldForm />
                         <TextFieldNew label="Expense Account:"/>
                    </div>
                    <div><SelectForm label="Expense Account:"/></div>
                </Form>
            </div>
        </Container>

    </div>
  )
}

export default AddExpense