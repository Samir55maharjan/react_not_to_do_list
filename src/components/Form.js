import React from 'react'

export const Form = () => {
  return (
    <form action="javascript:void(0)" onsubmit="handleOnSubmit(this)">
          <div className="row mt-3 g-2">
            <div className="col-md-6">
              <input
                name="task"
                type="text"
                className="form-control"
                placeholder=""
                required
              />
            </div>
            <div className="col-md-3">
              <input
                name="hr"
                type="number"
                className="form-control"
                min="1"
                placeholder=""
                required
              />
            </div>
            <div className="col-md-3 d-grid gap-2">
              <button className="btn btn-primary">
                <i className="fa-solid fa-plus"></i>
                Add New Task
              </button>
            </div>
          </div>
        </form>
  )
}

