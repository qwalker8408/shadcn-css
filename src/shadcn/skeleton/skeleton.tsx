import styles from './index.module.css'

function Skeleton({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={styles.Skeleton}
      {...props}
    />
  )
}

export { Skeleton }
