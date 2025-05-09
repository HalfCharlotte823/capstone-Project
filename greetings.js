function greetUser(){
    const hasVisitedBefore = document.cookie.includes("visitedBefore=true");
    if(hasVisitedBefore){
        alert("Welcome back to Random Play!");
    } else {
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 7);
        document.cookie = `visitedBefore=true;
        expires=${expiryDate.toUTCString()}; path=/`;
        alert("Welcome to Random Play! Enjoy your stay!");
    }
}
greetUser()