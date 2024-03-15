function sendEmail() {
  // Email encoded to obfuscate email
  const email = atob('c2FuZHJhX2F0X3BqY0B5YWhvby5jb20=');
  const subject = `subject=${encodeURIComponent("Cancer Diaries Enquiry")}`;
  const message = `body=${encodeURIComponent("")}`;
  window.location.href = `mailto:${email}?${subject}&${message}`;
}

function goToPaypal(amount) {
  const link = atob("aHR0cHM6Ly9wYXlwYWwubWUvc2FuZHJhdHVsbGV0dC8")
  window.location.href = `${link}${amount}`;
}

function goToFacebook() {
  const link = atob("aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NhbmRyYS5ob3BraW5zLjE4")
  window.location.href = link;
}
