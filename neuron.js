function neuron(data) {
    // If the input is empty, return an empty object
    if (data.length === 0) {
      return {};
    }
  
    const result = { questions: {}, orders: {} };
  
    data.forEach(entry => {
      const questionMatch = entry.match(/Questions: (.*?) - Response: (.*)/);
      const orderMatch = entry.match(/Orders: (.*?) - Response: (.*)/);
  
      if (questionMatch) {
        const question = questionMatch[1].toLowerCase().replace(/ /g, '_');
        const response = questionMatch[2];
        if (!result.questions[question]) {
          result.questions[question] = { question: questionMatch[1], responses: [] };
        }
        result.questions[question].responses.push(response);
      } else if (orderMatch) {
        const order = orderMatch[1].toLowerCase().replace(/ /g, '_');
        const response = orderMatch[2];
        if (!result.orders[order]) {
          result.orders[order] = { order: orderMatch[1], responses: [] };
        }
        result.orders[order].responses.push(response);
      }
    });
  
    return result;
  }
  
  // Example usage:
  const output = neuron([
    'Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system',
    'Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)',
    'Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps',
    'Orders: shutdown! - Response: Yes Sr!',
    'Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.'
  ]);
  
  console.log(output);
  