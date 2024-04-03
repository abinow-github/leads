//call
document.getElementById("call1").addEventListener("click", function() {
    // Use the "tel:" URI scheme to initiate a phone call
    window.location.href = "tel:+919745000989";
});
document.getElementById("call3").addEventListener("click", function() {
    // Use the "tel:" URI scheme to initiate a phone call
    window.location.href = "tel:+914833297064";
});
//whatsapp
        document.getElementById("whatsappButton").addEventListener("click", function() {
            // Replace the phone number with the desired WhatsApp number
            var phoneNumber = "+919745000984";
            
            // Construct the WhatsApp URL
            var whatsappURL = "https://wa.me/" + phoneNumber;
            
            // Open WhatsApp in a new window or tab
            window.open(whatsappURL);
        });
