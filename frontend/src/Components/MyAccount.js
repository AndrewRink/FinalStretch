function MyAccount () {
    const timeOfDay = () => {
        var myDate = new Date();
        var hrs = myDate.getHours();

        var greet;

        if (hrs < 12)
            greet = 'Good Morning';
        else if (hrs >= 12 && hrs <= 17)
            greet = 'Good Afternoon';
        else if (hrs >= 17 && hrs <= 24)
            greet = 'Good Evening';
        return (
        document.getElementById('greeting').innerHTML =
             greet + ', user!'
        )
    }

    return (
        <div>
            <div>
                <h1 id="greeting" >{timeOfDay()}</h1>
            </div>
            <div>
                <h3>Welcome to your Account Dashboard</h3>
                <p>Here you can view your account details and workout data!</p>
            </div>
            <div>
                <h3>Personal Details</h3>
                
            </div>
        </div>
    )
}

export default MyAccount