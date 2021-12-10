import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Button,
  Comment,
  Feed,
  Form,
  Grid,
  Header,
  Icon,
  Label,
  Menu,
  Search,
  Table,
} from "semantic-ui-react";

function App() {
  return (
    <div>
      <br />
      <Grid columns="equal">
        <Grid.Column width="3"></Grid.Column>
        <Grid.Column>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="2" textAlign="right">
                  <Search placeholder="Search document..." />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center">
                  Nama Document
                </Table.HeaderCell>
                <Table.HeaderCell textAlign="center">
                  Jenis File
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Paduan Belajar Javascript</Label>
                </Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Paduan Belajar CSS</Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Paduan Belajar React JS</Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Footer>
              <Table.HeaderCell colSpan="2">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Footer>
          </Table>
        </Grid.Column>
        <Grid.Column width="3"></Grid.Column>
      </Grid>
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column width="4">
            <Comment.Group threaded>
              <Header as="h3" dividing>
                Commentar
              </Header>

              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
                />
                <Comment.Content>
                  <Comment.Author as="a">Sartia</Comment.Author>
                  <Comment.Metadata>
                    <span>Today at 5:42PM</span>
                  </Comment.Metadata>
                  <Comment.Text>Hallo..!</Comment.Text>
                  <Comment.Actions>
                    <a href="/">Reply</a>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                />
                <Comment.Content>
                  <Comment.Author as="a">Danang</Comment.Author>
                  <Comment.Metadata>Today at 5:50PM</Comment.Metadata>
                  <Comment.Text>Kerjakan Sesuatu Semampu Kamu..</Comment.Text>
                  <Comment.Actions>
                    <a href="/">Reply</a>
                  </Comment.Actions>
                </Comment.Content>
                <Comment.Group>
                  <Comment>
                    <Comment.Avatar
                      as="a"
                      src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
                    />
                    <Comment.Content>
                      <Comment.Author as="a">Ricky</Comment.Author>
                      <Comment.Metadata>Just now</Comment.Metadata>
                      <Comment.Text>Kamu Dimana Sekarang Danang </Comment.Text>
                      <Comment.Actions>
                        <a href="/">Reply</a>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Comment.Group>
              </Comment>

              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
                />
                <Comment.Content>
                  <Comment.Author as="a">Joe</Comment.Author>
                  <Comment.Metadata>1 days ago</Comment.Metadata>
                  <Comment.Text>Terimakasih Atas Nasihat Nya</Comment.Text>
                  <Comment.Actions>
                    <a href="/">Reply</a>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Form reply>
                <Form.TextArea />
                <Button
                  content="Add Reply"
                  labelPosition="left"
                  icon="edit"
                  primary
                />
              </Form>
            </Comment.Group>
          </Grid.Column>
          <Grid.Column></Grid.Column>
          <Grid.Column width="3">
            <Feed>
              <Feed.Event>
                <Feed.Label>
                  <img
                    alt=".."
                    src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                  />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    <Feed.User>Anton</Feed.User> added you as a friend
                    <Feed.Date>1 hour Ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name="like" /> 4 likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label icon>
                  <Icon name="pencil" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    You submitted a new post to the page
                  </Feed.Summary>
                  <Feed.Meta>
                    <Feed.Date>3 days ago</Feed.Date>
                  </Feed.Meta>
                  <Feed.Extra text>
                    Saya Senang Belajar Bahasa Pemograman
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like content="11 like" />
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label>
                  <img
                    alt=".."
                    src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                  />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date>4 days ago</Feed.Date>
                  <Feed.Summary>David added 2 new image</Feed.Summary>
                  <Feed.Extra images>
                    <img
                      alt=".."
                      src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png"
                    />
                    <img
                      alt=".."
                      src="https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png"
                    />
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name="like" /> 11 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
