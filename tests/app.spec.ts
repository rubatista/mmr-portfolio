import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Button  from './components/Button.vue'

describe('Button.vue', () => {
  it('should render button', () => {
      const wrapper = mount(Button)

      expect(wrapper.find('h1').attributes()).toBeTruthy()
  })
})