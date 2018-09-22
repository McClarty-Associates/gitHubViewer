import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import User from "@/views/User.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("User.vue", () => {
  it("renders the user for the given id when passed", () => {
    const id = "MDQ6VXNlcjM2MTUwODI=";
    const testName = "Andy Moravec";
    const wrapper = shallowMount(User, {
      propsData: { id: id }
    });
    expect(wrapper.text()).toMatch(testName);
  });
});
