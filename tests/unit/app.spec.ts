import { shallowMount, Wrapper } from '@vue/test-utils';
import App from '../../src/App.vue';
import CreateNewTodo from '../../src/components/CreateNewTodo.vue';
import ToDoModel from '@/models/ToDoModel';

describe('App.vue component', () => {
  let wrapper: Wrapper<App>;

  beforeAll(() => {
    wrapper = shallowMount(App);
  });

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('when CreateNewTodo emit a new-todo event', () => {
    const dummyTodo: ToDoModel = {
      text: 'Hello',
      done: true,
      id: 4
    };

    beforeAll(() => {
      wrapper.find(CreateNewTodo).vm.$emit('new-todo', dummyTodo);
    });

    it('should push the emitted Todo to todos list', () => {
      expect(wrapper.vm.$data.todos.indexOf(dummyTodo)).not.toBe(-1);
    });
  });
});
