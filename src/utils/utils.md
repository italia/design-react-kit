# Utils

Tutti gli elementi che sono dentro utils se possibile non dovranno creare un nuovo container. Vedi implementazione Text di riferimento.

```jsx
if (typeof children === 'string') {
    return (
        <span className={textClass} {...rest}>
            {children}
        </span>
    );
}
if (Array.isArray(children)) {
    return (
        <div className={textClass} {...rest}>
            {children}
        </div>
    );
}
return React.cloneElement(children, {
    className: classnames(textClass, children.props.className),
    ...rest,
});
```