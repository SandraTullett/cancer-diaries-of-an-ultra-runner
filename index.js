function sendEmail() {
  // Email encoded to obfuscate email
  const email = atob('c2FuZHJhX2F0X3BqY0B5YWhvby5jb20=');
  const subject = `subject=${encodeURIComponent("Cancer Diaries Enquiry")}`;
  const message = `body=${encodeURIComponent("")}`;
  window.location.href = `mailto:${email}?${subject}&${message}`;
}

function goToPaypal(amount) {
  // TODO create paypal link
  // window.location.href = `https://paypal.me/sandratullet/${amount}`;
}
