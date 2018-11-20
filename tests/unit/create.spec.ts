import { shallowMount, Wrapper } from '@vue/test-utils';
import CreateNewTodo from '../../src/components/CreateNewTodo.vue';
import ToDoModel from '../../src/models/ToDoModel';

describe('CreateNewTodo.vue component', () => {
  let wrapper: Wrapper<CreateNewTodo>;
  const emptyTodo: ToDoModel = {
    text: '',
    done: false,
    id: -1
  };

  beforeAll(() => {
    wrapper = shallowMount(CreateNewTodo);
  });

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('when click on "Add"', () => {
    let emitted: any;

    describe('if text field is empty', () => {
      beforeAll(() => {
        wrapper = shallowMount(CreateNewTodo);
        wrapper.find('button').element.click();
        emitted = wrapper.emitted();
      });

      it('should NOT emit a "new-todo" event', () => {
        expect(emitted['new-todo']).toBeFalsy();
      });
    });

    describe('if text field is not empty', () => {
      const dummyText = 'Hello World';
      const dummyTodo: ToDoModel = { ...emptyTodo, text: dummyText };
      beforeAll(() => {
        wrapper = shallowMount(CreateNewTodo);
        wrapper.find('input').setValue(dummyText);
        wrapper.find('input').trigger('change');
        wrapper.find('button').element.click();
        emitted = wrapper.emitted();
      });

      it('should emit a "new-todo" event', () => {
        expect(emitted['new-todo']).toBeTruthy();
      });

      it('should should pass newTodo data through the event', () => {
        expect(emitted['new-todo'][0]).toEqual([dummyTodo]);
      });

      it('should empty the input field', () => {
        expect(wrapper.vm.$data.newTodo.text).toEqual('');
      });
    });
  });

  describe('when hitting Enter on Input field', () => {
    let emitted: any;

    describe('if text field is not empty', () => {
      beforeAll(() => {
        wrapper = shallowMount(CreateNewTodo);
        wrapper.find('input').setValue('dummyText');
        wrapper.find('input').trigger('keyup.enter');
        emitted = wrapper.emitted();
      });

      it('should emit a "new-todo" event', () => {
        expect(emitted['new-todo']).toBeTruthy();
      });
    });
  });
});
