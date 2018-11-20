import { shallowMount, Wrapper } from '@vue/test-utils';
import ToDo from '../../src/components/ToDo.vue';
import ToDoModel from '../../src/models/ToDoModel';

describe('ToDo.vue component', () => {
  let dummyTodo: ToDoModel;
  let wrapper: Wrapper<ToDo>;
  beforeAll(() => {
    dummyTodo = {
      text: 'test',
      done: true,
      id: 0
    };
    wrapper = shallowMount(ToDo, {
      propsData: { todo: dummyTodo }
    });
  });

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('when it is marked as done', () => {
    beforeAll(() => {
      dummyTodo = {
        text: 'test',
        done: true,
        id: 0
      };
      wrapper = shallowMount(ToDo, {
        propsData: { todo: dummyTodo }
      });
    });

    it('should contain [DONE] element', () => {
      expect(wrapper.findAll('.todoIsDone.true')).toHaveLength(1);
    });
    it('should not contain [TODO] element', () => {
      expect(wrapper.findAll('.todoIsDone.false')).toHaveLength(0);
    });

    describe('when component is clicked', () => {
      beforeAll(() => {
        wrapper.trigger('click');
      });

      it('should now be not done', () => {
        expect(dummyTodo.done).toBe(false);
      });
    });
  });

  describe('when it is marked as not done', () => {
    beforeAll(() => {
      dummyTodo = {
        text: 'test',
        done: false,
        id: 0
      };
      wrapper = shallowMount(ToDo, {
        propsData: { todo: dummyTodo }
      });
    });

    it('should not contain [DONE] element', () => {
      expect(wrapper.findAll('.todoIsDone.true')).toHaveLength(0);
    });
    it('should contain [TODO] element', () => {
      expect(wrapper.findAll('.todoIsDone.false')).toHaveLength(1);
    });

    describe('when component is clicked', () => {
      beforeAll(() => {
        wrapper.trigger('click');
      });

      it('should now be done', () => {
        expect(dummyTodo.done).toBe(true);
      });
    });
  });
});
