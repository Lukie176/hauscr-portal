// To have component specific styles, we will use Module-level CSS
import styles from './TemplateComponent.module.css'

// export alliows for this component to be imported in other components
// default makes it so that you don't need to write "import {TemplateComponent} ..."
// props is a JS object containing the variables you passed as attributes
// To access your attributes, key into the JS object using dot notation
export default function TemplateComponent(props) {
  return (
    <p
      // Note how the "sample" class is accessed as a property on the imported
      // `styles` object.
      className={styles.sample}
    >
      Using the same component: {props.text}
    </p>
  )
}