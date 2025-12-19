# Free Donkey Hugs - AI Agent Friends 🤗🐴

A delightful collection of AI agent friends that provide companionship, assistance, and virtual hugs. This project creates personalized AI companions with unique personalities and capabilities.

## 🌟 Features

- **Multiple AI Agent Personalities**: Each agent has distinct characteristics and communication styles
- **Interactive Conversations**: Engage in meaningful dialogues with your AI friends
- **Emotional Support**: Get virtual hugs and positive reinforcement when needed
- **Customizable Responses**: Agents adapt their responses based on context and user preferences
- **Memory & Context**: Agents remember previous conversations for continuity

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- API keys for AI services (if using external APIs)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/melissaspiegel/free-donkey-hugs.git
cd free-donkey-hugs
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your API keys and configuration
```

4. Start the application:
```bash
npm start
```

## 🤖 Agent Friends

### Available Agents

Each AI agent friend has unique characteristics:

- **Donkey** 🐴 - The original friendly companion, always ready with encouragement
- **Helper Bot** 🤖 - Task-oriented assistant for productivity and problem-solving
- **Therapy Friend** 💙 - Emotionally supportive agent for wellness conversations
- **Creative Buddy** 🎨 - Artistic and imaginative companion for creative projects

### Creating New Agents

To add a new AI agent friend:

1. Define the agent's personality in the configuration
2. Set up conversation patterns and response styles
3. Configure any special capabilities or knowledge domains
4. Test the agent's responses and refine as needed

## 📝 Usage Examples

### Basic Conversation
```javascript
const agent = new AIAgent('donkey');
const response = await agent.chat("I'm feeling down today");
console.log(response); // "Here's a virtual hug! 🤗 What's troubling you, friend?"
```

### Getting Help
```javascript
const helper = new AIAgent('helper');
const assistance = await helper.askForHelp("How do I organize my tasks?");
```

### Creative Collaboration
```javascript
const creative = new AIAgent('creative');
const idea = await creative.brainstorm("I need ideas for a short story");
```

## 🛠️ Configuration

### Agent Settings

Configure agent personalities in `config/agents.json`:

```json
{
  "donkey": {
    "personality": "friendly, encouraging, warm",
    "specialties": ["emotional support", "motivation"],
    "responseStyle": "casual and caring"
  }
}
```

### Environment Variables

- `AI_API_KEY`: API key for AI service
- `MAX_CONVERSATION_LENGTH`: Maximum conversation history
- `RESPONSE_TIMEOUT`: Timeout for AI responses

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Run specific agent tests:
```bash
npm run test:agents
```

## 📚 API Reference

### Core Methods

- `agent.chat(message)` - Send a message and get a response
- `agent.setMood(mood)` - Adjust the agent's current mood
- `agent.remember(context)` - Add context to agent's memory
- `agent.getPersonality()` - Retrieve agent's personality settings

### Events

- `message` - Fired when a new message is received
- `response` - Fired when agent generates a response
- `mood-change` - Fired when agent's mood changes

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and add tests
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to all the AI researchers making friendly AI possible
- Inspired by the need for positive human-AI interactions
- Special thanks to donkey enthusiasts everywhere 🐴

## 📞 Support

- Create an issue for bug reports or feature requests
- Join our community discussions
- Check the FAQ for common questions

---

*Made with ❤️ and lots of virtual hugs*
