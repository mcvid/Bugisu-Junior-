document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const subject = e.target.subject.value.trim();
    const message = e.target.message.value.trim();

    // Validation
    if (!name) {
      alert("Please enter your name.");
      return;
    }
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!message) {
      alert("Please enter your message.");
      return;
    }

    const formData = {
      name,
      email,
      subject,
      message,
    };

    try {
      const res = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);
      e.target.reset(); // Reset form on success
    } catch (err) {
      alert("Error sending message. Please try again later.");
    }
  });
