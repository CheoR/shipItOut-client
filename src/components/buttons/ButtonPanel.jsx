import React from 'react'
import { Button, ButtonGroup } from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom'

const ButtonPanel = ({ prev, next, create, update, endpoint, page, instance, action }) => {
  const navigateTo = useNavigate()

  return (
    <ButtonGroup sx={{ margin: '0 auto', gap: 2,  width: "100%", display: "flex", justifyContent: "center", height: 50, }}>
          <Button
            variant='contained'
            color='primary'
            label='Cancel'
            component={RouterLink}
            to={`/${endpoint}`}
          >
            Cancel
          </Button>
          {
            page !== 1 && (
              <Button
                variant='contained'
                color='primary'
                label='Prev'
                onClick={prev}
              >
                Back
              </Button>
            )
          }
          {
            page !== 3 && (
            <Button
              variant='contained'
              color='primary'
              label='Next'
              onClick={next}
            >
              Next
            </Button>
            )
          }
          {
            action === "view" && (
            <Button
              variant='contained'
              color='primary'
              label='Edit'
              onClick={() => {
                navigateTo(`/${endpoint}/update/${instance}`)
              }}
            >
              Edit
            </Button>
            )
          }

          {
            action === "update" && update && (
            <Button
              variant='contained'
              color='primary'
              label='Update'
              onClick={update}
            >
              Update
            </Button>
            )
          }
          {
            page === 3 && action === "create" && (
            <Button
              variant='contained'
              color='primary'
              label='Create'
              onClick={create}
            >
              Create
            </Button>
            )
          }
        </ButtonGroup>
  )
}

export default ButtonPanel
