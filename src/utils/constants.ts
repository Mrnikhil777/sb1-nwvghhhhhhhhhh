// Ad configuration
export const ADSENSE_CONFIG = {
  client: 'ca-pub-4546141241525552',
  slots: {
    inArticle: '1122334455'
  }
};

// Code examples for LiveDemo
export const CODE_EXAMPLES = [
  {
    title: "React Component",
    code: `function Button({ children, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 
        text-white rounded hover:bg-blue-600"
    >
      {children}
    </button>
  );
}`
  },
  {
    title: "API Endpoint",
    code: `app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find()
      .select('-password')
      .limit(10);
    res.json(users);
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to fetch users' 
    });
  }
});`
  },
  {
    title: "Data Structure",
    code: `class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
}`
  }
];