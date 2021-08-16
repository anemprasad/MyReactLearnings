export default function MyTest(props) {
  console.log(props);
  return (
    <div className="App">
      <h1>Hello CodeSandbox {props.name}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
