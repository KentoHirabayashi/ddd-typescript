import { sayHello } from './hello';

test('sayHello', () => {
    expect(sayHello('World')).toBe('Hello World!');
});
