export default class HomeV {
    public show(params : string[]): void {
       console.log("Home view is showing");
       console.log("Params: ", params);

       document.body.appendChild(document.createElement("h1")).innerHTML = "<h1>Welcome to GTD Framework!!</h1>";
    }
}