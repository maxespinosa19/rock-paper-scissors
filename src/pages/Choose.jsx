import AppLayout from "./layout/AppLayout"

export default function Choose({setSelectedItem, selectedItem}){

    
    return(
        <AppLayout>
            <h1>Player VS Computer</h1>
            <div>
             <img src="/images/paper.png" onClick={() => setSelectedItem(0)} />
             <img src= "/images/leftScissor.png" onClick={() =>setSelectedItem(1)}/>
             <img src="/images/rockRight.png"  onClick={() =>setSelectedItem(2)}/>
            </div>
            <button>Pick one!</button>
        </AppLayout>
    )

}