import React from 'react'
//helper functions
import { createBudget, fetchData } from '../helpers'
import { useLoaderData } from 'react-router-dom';
import Intro from '../components/Intro';

import { toast } from 'react-toastify';
import AddBudgetForm from '../components/AddBudgetForm';

//loader
export function dashboardLoader() {
    const userName = fetchData("userName");
    const budgets = fetchData("budgets");
    return { userName, budgets }
}

//action

export async function dashboardAction({request}) {
    const data = await request.formData();
    const {_action, ...values} = Object.fromEntries(data);


  if(_action === 'newUser') {
    try{
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`welcome ${values.userName}`)
    }  catch(e) {
      throw new Error("There was a problem creating your account")
    }
  }

  if(_action === 'createBudget') {
    try {
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      })
      return toast.success("budget created")
    } catch(error) {
      throw new Error("There waw a problem your budget")
    }
  }

}


const Dashboard = () => {
    const {userName, budgets} = useLoaderData() 
  return (
    <>
        {userName ? (
          
          <div className="dashboard">
            <h1>Welcome back,
            <span className='accent'>{userName}</span></h1>
            <div className="grid-sm">
              {/* {budgets ? () : ()} */}
              <div className="grid-lg">
                <div className="flex-lg">
                  <AddBudgetForm/>
                </div>
              </div>
            </div>
          </div>
          ) : (<Intro />)}
    </>
  )
}

export default Dashboard