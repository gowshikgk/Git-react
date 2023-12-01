import React from 'react'
class Firstchild extends React.Component{
    render(){
        return(
        <>
        <h2>This is the child 1 component</h2>
        </>
        )
    }
}
class Secondchild extends React.Component{
    render(){
        return(
            <>
            <h3>This is the Secondchild</h3>
            </>
        )
    }
}
class Thirdchild extends React.Component{
    render() {
      return (
      <>
      <Secondchild/>
      <h3>This is the third child</h3>
      </>
      )
    }
}
function Nested() {
  return (
    <div>
      <h1>This is the parent component</h1>
      <Firstchild/>
      <Thirdchild/>
      <Fourthchild/>
    </div>
  )
}
function Fourthchild(){
    return(
        <>
        <h3>This is the functional component</h3>
        </>
    )
}

export default Nested
