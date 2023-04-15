import { SvgIcon, SvgIconProps, useTheme } from '@mui/material';

export default function IconSend({ ...props }: SvgIconProps) {
  const theme = useTheme();

  return (
    <SvgIcon viewBox="0 0 1024 1024" {...props}>
      <path d="M860.736 80.544l-11.072-30.016 11.072 30.016zM130.592 350.496l-11.104-30.016 11.104 30.016z m-8.928 115.936l15.552-27.936-15.552 27.936z m254.624 141.632l-15.552 27.968 15.552-27.968z m26.4 27.84l-28.768 14.08 28.768-14.08z m140.064 286.592l-28.736 14.08 28.736-14.08z m117.44-5.632l-29.984-11.232 29.984 11.232z m282.688-753.824l29.952 11.2-29.952-11.2z m-93.216-112.512L119.456 320.48l22.208 60.032 730.144-269.984-22.208-60zM106.112 494.4l254.624 141.632 31.104-55.936-254.624-141.6-31.104 55.904z m267.84 155.552l140.064 286.592 57.472-28.096-140.064-286.592-57.504 28.096z m316.16 278.144l282.72-753.824-59.936-22.464L630.208 905.6l59.936 22.464z m-176.096 8.448c36.96 75.68 146.56 70.432 176.128-8.448l-59.936-22.464c-9.856 26.304-46.4 28.032-58.72 2.816l-57.504 28.096z m-153.28-300.48a32 32 0 0 1 13.184 13.888l57.504-28.096a96 96 0 0 0-39.584-41.76l-31.104 55.936z m-241.248-315.584c-76.96 28.448-85.056 134.08-13.376 173.92l31.104-55.904a32 32 0 0 1 4.48-57.984l-22.208-60.032z m752.352-209.92a32 32 0 0 1 41.056 41.248l59.936 22.464c28.864-76.992-46.08-152.256-123.2-123.744l22.208 60zM406.272 646.944l544-528-44.576-45.952-544 528 44.576 45.952z"></path>
    </SvgIcon>
  );
}