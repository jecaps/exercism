/*
Instructions
Bob is a lackadaisical teenager. In conversation, his responses are very limited.

Bob answers 'Sure.' if you ask him a question, such as "How are you?".

He answers 'Whoa, chill out!' if you YELL AT HIM (in all capitals).

He answers 'Calm down, I know what I'm doing!' if you yell a question at him.

He says 'Fine. Be that way!' if you address him without actually saying anything.

He answers 'Whatever.' to anything else.

Bob's conversational partner is a purist when it comes to written communication and always follows normal rules regarding sentence punctuation in English.
*/

const hey = (message) => {
  message = message.trim();
  // if (/^[\s]*$/.test(message)) {
  //   return "Fine. Be that way!";
  // } else if (/^[A-Z][A-Z\W]+\?$/.test(message)) {
  //   return "Calm down, I know what I'm doing!";
  // } else if (/^[\w\W]+\?$/.test(message)) {
  //   return "Sure.";
  // } else if (/^(?=.*[A-Z])[A-Z0-9\W]*$/.test(message)) {
  //   return "Whoa, chill out!";
  // } else {
  //   return "Whatever.";
  // }

  return /^[\s]*$/.test(message)
    ? "Fine. Be that way!"
    : /^[A-Z][A-Z\W]+\?$/.test(message)
    ? "Calm down, I know what I'm doing!"
    : /^[\w\W]+\?$/.test(message)
    ? "Sure."
    : /^(?=.*[A-Z])[A-Z0-9\W]*$/.test(message)
    ? "Whoa, chill out!"
    : "Whatever.";
};
