import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import marked from 'marked';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './Markdown.css';

export class Markdown extends Component {
  constructor(props) {
    super(props);
    // Initial State
    this.state = {
      markdown: `# Enter markdown in the text area
## see it previewed
1. [**\`inline code list\`**](https://ScriptHammer.com "https://ScriptHammer.com")  

\`\`\`bash
code block
\`\`\`  
> Quote Block
![ScritpHammer.com](https://raw.githubusercontent.com/TurtleWolfe/fccTempLate/master/src/images/ScriptHammerSM.gif 'ScriptHammer.com')  
`,
    };
  }

  static propTypes = {
    markdown: PropTypes.string.isRequired,
  };

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    let { markdown } = this.state;
    return (
      <Container>
        <Row className="justify-content-center">

          <h4>
            <a
              className="App-link"
              href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer"
              target="_blank"
              rel="noopener noreferrer"
              title="Markdown Previewer"
            >
              <i className="fab fa-markdown"></i> Markdown Previewer <i className="fab fa-markdown"></i>
            </a>
          </h4>
          <Form
            style={{ width: '90%' }}>
            <Form.Group controlId="editor" >
              <Form.Control as="textarea"
                className="bg-dark text-white"
                rows={3}
                value={markdown}
                onChange={(e) => {
                  this.updateMarkdown(e.target.value);
                }}
              />

            </Form.Group>
          </Form>

          <Card id="preview"
            className="bg-dark text-white"
            style={{ width: '90%' }}
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          >
          </Card>
          <h5>
            <a
              className="App-link"
              href="https://www.twitch.tv/collections/ElUGINSGVBYpbw"
              target="_blank"
              rel="noopener noreferrer"
              title="These two Episodes on Twitch I build a MarkDown Previewer"
            >
              <i className="fab fa-twitch"></i> These Episodes on Twitch <i className="fab fa-twitch"></i>
            </a>
          </h5>

        </Row>
      </Container>
    );
  }
}

export default Markdown;

// Set options
// `highlight` example uses `highlight.js`
marked.setOptions({
  renderer: new marked.Renderer(),
  // pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: true,
  // smartLists: true,
  // smartypants: false,
  // xhtml: false
});
