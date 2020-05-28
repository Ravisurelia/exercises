(function(){
    ////////DO NOT TOUCH OR DELETE THIS: THIS IS A BOILER CODE FOR HANDLEBARS//////////////////
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll('script[type="text/x-handlebars-template"]');
    
    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
    //////EXAMPLE 1-------------
    /*
    var dillObj = {
        name: "Dill",
        nickname: "Dillians",
        favoriteFoods: ["mung beans", "pizza", "falafal", "cheesecake"]
    };
    

    $("#dill-info").html(Handlebars.templates.dillId(dillObj));
    */

    //////EXAMPLE 2--------------
    var dogsData = {
        dogs: [
            {
                name: "George",
                image: "https://cdn2.thedogapi.com/images/S1_8kx5Nm_1280.jpg",
                breed: "Akita",
                temperament: ["Docile", "Alert", "Friendly"]
            },
            {
                name: "Lola",
                image: "https://cdn2.thedogapi.com/images/Hyjcol947_1280.jpg",
                breed: "Tibetan Spaniel",
                temperament: ["Willful", "Aloof", "Assertive"]
            },
            {
                name: "Kepler",
                image: "https://cdn2.thedogapi.com/images/BFRYBufpm.jpg",
                breed: "Akita",
                temperament: ["Docile", "Alert", "Responsive"]
            },
            {
                name: "Milford",
                image: "https://cdn2.thedogapi.com/images/BkMQll94X_1280.jpg",
                breed: "Basset Bleu de Gascogne",
                temperament: ["Lively", "Agile", "Curious"]
            },
            {
                name: "Jack",
                image: "https://cdn2.thedogapi.com/images/quiHq2FiB.jpg",
                breed: "American Foxhound",
                temperament: ["Kind", "Loyal", "Independent"]
            },
            {
                name: "Fritz",
                image: "https://cdn2.thedogapi.com/images/rJ6iQeqEm_1280.jpg",
                breed: "Pembroke Welsh Corgi",
                temperament: ["Tenacious", "Friendly", "Bold"]
            },
            {
                name: "Chester",
                image: "https://cdn2.thedogapi.com/images/SyXN-e9NX_1280.jpg",
                breed: "Cardigan Welsh Corgi",
                temperament: ["Affectionate", "Devoted", "Alert"]
            },
            {
                name: "Glover",
                image: "https://cdn2.thedogapi.com/images/Syszjx9Em_1280.jpg",
                breed: "Smooth Fox Terrier",
                temperament: ["Fearless", "Affectionate", "Alert"]
            },
            {
                name: "Sammy",
                image: "https://cdn2.thedogapi.com/images/A3iocPBuU.jpg",
                breed: "American Eskimo Dog",
                temperament: ["Friendly", "Alert", "Reserved"]
            },
            {
                name: "Balto",
                image: "https://cdn2.thedogapi.com/images/uEPB98jBS.jpg",
                breed: "Alaskan Husky",
                temperament: ["Friendly", "Loyal", "Gentle"]
            }
        ]
    };
    $(".dogs-info").html(Handlebars.templates.dogsId(dogsData));

})();