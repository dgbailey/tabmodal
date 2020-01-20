

document.addEventListener('DOMContentLoaded',setTabListener);

//set event listener
function setTabListener(){
    console.log(document)
    let tabs = document.querySelectorAll('.tab');
    console.log(tabs)
    tabs.forEach(t => t.addEventListener('click',getActiveTab));
}

//get active tab

function getActiveTab(e){
    
    let tab = e.target.dataset.tabid;
  
    Tabs(tab);
    TabContent(tab);

}

//represent our tabs

function Tabs(tId){

    const tabsNodeList = document.querySelectorAll('.tab');

    tabsNodeList.forEach(tn => {

        if(tn.dataset.tabid === tId){
            tn.classList.add('active');
            tn.classList.remove('inavtive');
        }
        else{
            tn.classList.remove('active');
            tn.classList.add('inavtive');
        }

    })


}

//represent our content
function TabContent(tId){



    const allTabContent = document.querySelectorAll('.tab-content');

    allTabContent.forEach(tc => {
        if(tc.dataset.tabid === tId){
            tc.classList.add('active');
            tc.classList.remove('inactive');
        }
        else{
            tc.classList.add('inactive');
            tc.classList.remove('active');
        }
    })
}



