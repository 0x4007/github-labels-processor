# GitHub Label Processor

Our bot creates and modifies many labels. This tool is used to manage them. You can use regular expressions to select labels.

### Help Menu Preview

```log
Label Processor

  Batch operations on GitHub labels.

Options

  -?, --help                Help menu.
  -o, --owner string        Owner or organization hosting the target
                            repository.
  -r, --repository string   Target repository name.
  -c, --color string        Color to use for the label. Must be a six character
                            CSS color string, without the `#` prefix, like
                            `ff0000`.
  -e, --regex string        Regex filter to search for.
  --tool string             Custom scripts with more advanced logic:
                              assistive-pricing-normalizer: Normalize pricing and priority labels
                              clear-unused-labels: Remove unused labels
                              colorize-labels: Update label colors
                              delete-labels: Remove specified labels
                              reset-colors: Reset to standard color scheme
                              scrub-comments: Update legacy command syntax
                              toggle-label: Toggle label on all open issues
  -x, --execute             Execute destructive command (e.g. delete label).
                            Otherwise, just print the dry run.

  Copyright 2023
```

Note: you must include the owner and repository name in the command line arguments, or it will throw an error.

### Example

```sh
yarn start --tool colorize-labels --owner ubiquity --repository devpool-directory --color ededed
```

### Available Tools

Last updated: December 12, 2023

The following tools are available in the `src/tools` directory.

- [] indicates deprecated.
- [x] indicates not deprecated.

#### assistive-pricing-normalizer
[] Normalizes pricing-related labels by updating priority labels to a new naming scheme, standardizing colors (grey for time labels, green for price labels), and cleaning up price range labels that use plus signs.

#### clear-unused-labels
[x] Identifies and removes labels that are not currently used in any issues or pull requests. This helps keep the label list clean and relevant.

#### colorize-labels
[x] Updates the color of specified labels. Can be used to maintain consistent color schemes across labels (e.g., all price-related labels in green).

#### delete-labels
[x] Removes specified labels from the repository. Requires the --execute flag to perform actual deletion, otherwise runs in dry-run mode.

#### reset-colors
[x] Resets label colors to a standardized scheme: grey (ededed) for general labels and green (1f883d) for price-related labels.

#### scrub-comments
[] Processes issue comments to replace "/assign" commands with "/start". Useful for updating legacy command syntax in issue comments.

#### toggle-label
[x] Toggles the presence of a specified label across all open issues. If an issue has the label, it will be removed; if it doesn't have the label, it will be added.

#### migrate-priority-labels
[] A collection of tools for migrating priority labels to a new naming scheme (e.g., "Priority: 0 (Normal)" to "Priority: 1 (Normal)"). Includes functionality to:
- Check for label existence
- Create new labels
- Update issue labels
- Remove old labels
- Maintain consistent color schemes

Check the `src/tools` directory for more tools.
