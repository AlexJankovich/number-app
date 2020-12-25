import React from "react"

type HTMLWrapperType = {
  text:any
}

export const HTMLWrapper = (props:HTMLWrapperType) => {
  return (
    <>
      {props.text}
    </>
  )
}