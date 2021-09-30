const companies = setInterval(setCompanies,10)
const templates = setInterval(setTemplate,10)
const queries = setInterval(setQueries,10)

const com_ref = document.getElementById("companies")
const tem_ref = document.getElementById("templates")
const que_ref = document.getElementById("queries")

var count_companies = 0;
var count_templates = 0;
var count_queries = 0;

function setCompanies(){
    count_companies +=100
    if(count_companies%1000000===0){
        com_ref.innerHTML = `${count_companies/1000000}m+`;

    }
    else if(count_companies%1000===0){
        com_ref.innerHTML = `${count_companies/1000}k+`;
    }
    else{
        com_ref.innerHTML = `${count_companies}+`;
    }
    if(count_companies==10000){
        clearInterval(companies)
    }
}

function setTemplate(){
    count_templates +=2
    tem_ref.innerHTML = `${count_templates}+`;
    if(count_templates===314){
        clearInterval(templates)
    }
}
function setQueries(){
    count_queries +=1000000
    if(count_queries%1000000===0){
        que_ref.innerHTML = `${count_queries/1000000}m+`;

    }
    else if(count_queries%1000===0){
        que_ref.innerHTML = `${count_queries/1000}k+`;
    }
    else{
        que_ref.innerHTML = `${count_queries}+`;
    }
    if(count_queries==12000000){
        clearInterval(queries)
    }
}