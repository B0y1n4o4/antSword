//
// language::en
//
module.exports = {
  toastr: {
    info: 'Info',
    error: 'Error',
    warning: 'Warning',
    success: 'Success'
  },
  menubar: {
    main: {
      title: 'AntSword',
      about: 'About',
      pluginStore: 'Plugin Store',
      settings: 'System setting',
      language: 'Language setting',
      encoders: 'Encoders manager',
      aproxy: 'Proxy setting',
      display: 'Display setting',
      update: 'Check update',
      quit: 'Quit'
    },
    edit: {
      title: 'Edit',
      undo: 'Undo',
      redo: 'Redo',
      cut: 'Cut',
      copy: 'Copy',
      paste: 'Paste',
      selectall: 'SelectAll'
    },
    window: {
      title: 'Window',
      next: 'Next window',
      prev: 'Prev window',
      close: 'Close window'
    },
    debug: {
      title: 'Debug',
      restart: 'Restart APP',
      devtools: 'Developer Tools'
    },
    tray: {
      tip: 'AntSword',
      show: 'Show',
      hide: 'Hide',
      settings: 'System setting',
      about: 'About',
      quit: 'Quit'
    }
  },
  shellmanager: {
    title: 'ShellManager',
    contextmenu: {
      terminal: 'Terminal',
      filemanager: 'FileManager',
      database: 'Database',
      add: 'Add',
      edit: 'Edit',
      delete: 'Delete',
      move: 'Move',
      copy: 'Copy',
      search: 'Search',
      plugin: 'Plugins',
      pluginDefault: 'Default',
      pluginStore: 'Plugin Store',
      clearCache: 'Clear cache',
      clearAllCache: 'Clear all cache',
      viewsite: 'View Site'
    },
    category: {
      title: 'Category',
      default: 'Default',
      toolbar: {
        add: 'Add',
        del: 'Del',
        rename: 'Rename'
      },
      add: {
        title: 'Add category'
      },
      del: {
        title: 'Delete category',
        confirm: 'Are you sure to delete this category?',
        success: (category) => antSword.noxss(`Delete category(${category}) success!`),
        error: (category, err) => antSword.noxss(`Delete category(${category}failed!\n${err}`)
      },
      rename: {
        title: 'Rename category',
        disable: 'Prohibited category name!',
        exists: 'This category name already exists!',
        success: 'Successful rename!',
        error: 'Rename category failed!'
      }
    },
    list: {
      title: 'Shell Lists',
      not_recommended: 'Not recommended',
      grid: {
        url: 'URL',
        ip: 'IP',
        addr: 'ADDR',
        note: 'NOTE',
        ctime: 'CTIME',
        utime: 'UTIME'
      },
      add: {
        title: 'Add shell',
        toolbar: {
          test: 'Test Connection',
          add: 'Add',
          clear: 'Clear'
        },
        form: {
          url: 'Shell url',
          pwd: 'Shell pwd',
          note: 'Note',
          encode: 'Encode',
          type: 'Shell type',
          encoder: 'Encoder'
        },
        test_success: 'Connection Successful!',
        test_warning: 'Response is null!',
        warning: 'Please enter the full!',
        success: 'Add shell success!',
        error: (err) => antSword.noxss(`Add shell failed!\n${err}`)
      },
      edit: {
        title: (url) => antSword.noxss(`Edit shell(${url})`),
        toolbar: {
          save: 'Save',
          clear: 'Clear'
        },
        form: {
          url: 'Shell url',
          pwd: 'Shell pwd',
          note: 'Note',
          encode: 'Encode',
          type: 'Shell type',
          encoder: 'Encoder'
        },
        warning: 'Please enter the full!',
        success: 'Update shell success!',
        error: (err) => antSword.noxss(`Update shell failed!\n${err}`)
      },
      del: {
        title: 'Delete shell',
        confirm: (len) => antSword.noxss(`Are you sure to delete ${len} shells?`),
        success: (len) => antSword.noxss(`Delete ${len} shells success!`),
        error: (err) => antSword.noxss(`Delete failed!\n${err}`)
      },
      move: {
        success: (num) => antSword.noxss(`Move ${num}datas success!`),
        error: (err) => antSword.noxss(`Move data failed!\n${err}`)
      },
      clearCache: {
        title: 'Clear cache',
        confirm: 'Are you sure to clear this cache?',
        success: 'Clear cache success!',
        error: (err) => antSword.noxss(`Clear cache failed!\n${err}`)
      },
      clearAllCache: {
        title: 'Clear all cache',
        confirm: 'Are you sure to clear all the cache?',
        success: 'Clear all cache success!',
        error: (err) => antSword.noxss(`Clear all cache failed!\n${err}`)
      },
      accordion: {
        base: 'Base',
        http: 'HTTP',
        other: 'Other'
      },
      otherConf: {
        nohttps: 'Ignore HTTPS certificate',
        usemultipart: 'Use Multipart send payload',
        chunk: {
          title: 'Chunked Transfer (Experimentally)',
          usechunk: 'Use Chunked send payload.',
          min: 'Min Block',
          max: 'Max Block',
          exphint: 'This feature is currently experimental and cannot be used with Multipart. Some types of servers may not support Chunked transfers. In addition, it is recommended to set the timeout period to 30s or more to avoid data transmission when the network speed is not good.',
        },
        terminalCache: "Use the terminal's cache",
        filemanagerCache: "Use the filemanager's cache",
        uploadFragment: "Upload File Fragmentation Size",
        requestTimeout: 'Request timeout',
        commandPath: 'Custom terminal-execPath'
      }
    }
  },
  terminal: {
    title: 'Terminal',
    banner: {
      title: 'Infomations',
      drive: 'Drive   List',
      system: 'System  Info',
      user: 'Current User',
      path: 'Current Path'
    },
    ascmd: {
      ashelp: `Usage:\nascmd file\t\tExecute the command with file, eg: ascmd /bin/bash\n`,
      ascmd: (cmd) => antSword.noxss(`Will execute the command with ${cmd}.`),
    },
  },
  filemanager: {
    title: 'FileManager',
    delete: {
      title: 'Delete',
      confirm: (num) => antSword.noxss(`Are you sure to delete ${typeof(num) === 'number' ? num + ' files' : num} ?`),
      success: (path) => antSword.noxss(`Delete file [${path}] success!`),
      error: (path, err) => antSword.noxss(`Delete file [${path}] failed!${err ? '\n' + err : ''}`)
    },
    paste: {
      success: (path) => antSword.noxss(`Paste file success!\n${path}`),
      error: (path, err) => antSword.noxss(`Paste file [${path}] failed!${err ? '\n' + err : ''}`)
    },
    rename: {
      title: 'Rename',
      success: 'Rename success!',
      error: (err) => antSword.noxss(`Rename failed!${err ? '\n' + err : ''}`)
    },
    createFolder: {
      title: 'Create Folder',
      value: 'New Folder',
      success: (path) => antSword.noxss(`Create folder success!\n${path}`),
      error: (path, err) => antSword.noxss(`Create folder [${path}] failed!${err ? '\n' + err : ''}`)
    },
    createFile: {
      title: 'Create File',
      value: 'New File.txt',
      success: (path) => antSword.noxss(`Create file success!\n${path}`),
      error: (path, err) => antSword.noxss(`Create file [${path}] failed!${err ? '\n' + err : ''}`)
    },
    retime: {
      title: 'Retime File',
      success: (path) => antSword.noxss(`Retime file success!\n${path}`),
      error: (path, err) => antSword.noxss(`Retime file [${path}] failed!${err ? '\n' + err : ''}`)
    },
    chmod: {
      title: 'Chmod File',
      check: 'Input should be octal numbers, eg: 0644',
      success: (path) => antSword.noxss(`Chmod file success!\n${path}`),
      error: (path, err) => antSword.noxss(`Chmod file [${path}] failed!${err ? '\n' + err : ''}`)
    },
    wget: {
      title: 'Wget File',
      check: 'URL is not correct!',
      task: {
        name: 'WGET',
        start: 'Start to wget file..',
        success: 'Wget success!',
        failed: (ret) => antSword.noxss(`Failed:${ret}`),
        error: (err) => antSword.noxss(`Error:${err}`)
      }
    },
    upload: {
      task: {
        name: 'Upload',
        success: 'Upload success!',
        httperr_413: 'Please lower the upload file shard size setting.',
        httperr_etime: 'Request timeout, please increase the timeout period.',
        httperr_econnrefused: 'Connection refused, check target or proxy is enabled.',
        failed: (err) => antSword.noxss(`Failed:${err}`),
        error: (err) => antSword.noxss(`Error:${err}`)
      },
      success: (path) => antSword.noxss(`Upload file success!\n${path}`),
      error: (path, err) => antSword.noxss(`Upload file [${path}] failed!${err}`),
    },
    folder: {
      title: 'Folders'
    },
    files: {
      title: 'Files',
      bookmark: {
        add: 'Add bookmark',
        del: 'Remove this bookmark',
        clear: 'Clear all bookmarks'
      },
      toolbar: {
        new: 'New',
        folder: 'Folder',
        file: 'File',
        wget: 'Wget File',
        upload: 'Upload File',
        up: 'UP',
        refresh: 'Refresh',
        home: 'Home',
        bookmark: 'Bookmark',
        read: 'Read'
      },
      prompt: {
        add: {
          title: 'Add to bookmark',
          success: (path) => antSword.noxss(`Add to bookmark success!\n${path}`),
        },
        remove: {
          title: 'Remove bookmark',
          confirm: 'Remove this bookmark ?',
          success: 'Remove bookmark success!'
        },
        clear: {
          title: 'Clear all bookmarks',
          confirm: 'Clear all bookmarks ?',
          success: 'Clear all bookmark success!'
        }
      },
      grid: {
        header: {
          name: 'Name',
          time: 'Time',
          size: 'Size',
          attr: 'Attr'
        },
        contextmenu: {
          paste: {
            title: 'Paste',
            all: 'All items',
            clear: {
              title: 'Clear items',
              info: 'Clear all Clipboard.'
            }
          },
          preview: 'Preview',
          edit: {
            title: 'Edit',
            openwindow: 'Open in Window',
            opentab: 'Open in Tab',
          },
          delete: 'Delete',
          rename: 'Rename',
          refresh: 'Refresh',
          wget: 'WGET',
          upload: 'Upload',
          download: 'Download',
          modify: 'Modify the file time',
          chmod: 'Chmod',
          copy: {
            title: 'Copy',
            copyname: 'Copy FileName',
            copypath: 'Copy FilePath',
            copysuccess: 'Copy to clipboard successfully!',
            copyfail: 'Copy to clipboard failed!',
            warning: (id) => antSword.noxss(`Already add to clipboard!\n${id}`),
            info: (id) => antSword.noxss(`Add file to the clipboard.\n${id}`)
          },
          create: {
            title: 'Create',
            folder: 'Folder',
            file: 'File'
          },
          terminal: 'Open Terminal Here'
        }
      }
    },
    editor: {
      title: (path) => antSword.noxss(`Edit: ${path}`),
      toolbar: {
        save: 'Save',
        mode: 'Mode',
        encode: 'Open with Encoding'
      },
      loadErr: (err) => antSword.noxss(`Load file error!\n${err}`),
      success: (path) => antSword.noxss(`Save the file success!\n${path}`),
      error: (path, err) => antSword.noxss(`Save the file [${path}] failed!${err}`)
    },
    tasks: {
      title: 'Tasks',
      grid: {
        header: {
          name: 'Name',
          desc: 'Description',
          status: 'Status',
          stime: 'StartTime',
          etime: 'EndTime'
        }
      }
    },
    download: {
      title: 'Download File',
      task: {
        name: 'Download',
        wait: 'Wait to download',
        cancel: 'Cancel download',
        start: 'Start to download',
        success: 'Download success!',
        error: (err) => antSword.noxss(`Error:${err}`)
      },
      error: (name, err) => antSword.noxss(`Download file [${name}]error!\n${err}`),
      success: (name) => antSword.noxss(`Download file [${name}] success!`)
    }
  },
  database: {
    list: {
      title: 'Config list',
      add: 'Add',
      del: 'Del',
      edit: 'Edit',
      check: 'Check',
      menu: {
        add: 'Add conf',
        del: 'Del conf',
        edit: 'Edit conf',
        adddb: 'New Database',
        editdb: 'Edit Database',
        deldb: 'Del Database',
        addtable: 'New Table',
        edittable: 'Edit TableName',
        desctable: 'Desc Table',
        showcreatetable: 'Create Table SQL',
        deltable: 'Del Table',
        addcolumn: 'New Column',
        editcolumn: 'Edit ColumnName',
        delcolumn: 'Del Column',
      }
    },
    query: {
      title: 'Exec SQL',
      exec: 'Run',
      clear: 'Clear'
    },
    result: {
      title: 'Result',
      warning: 'Execution is completed, but no results return!',
      error: {
        database: (err) => antSword.noxss(`Failed to obtain a list of databases!\n${err}`),
        table: (err) => antSword.noxss(`Get table data failed!\n${err}`),
        column: (err) => antSword.noxss(`Failed to obtain field list!\n${err}`),
        query: (err) => antSword.noxss(`Failure to execute SQL!\n${err}`),
        parse: 'Return data format is incorrect!',
        noresult: 'No query results!'
      },
      dump: {
        title: "Export Data",
        success: "Export success",
      }
    },
    notsupport: 'Not support the current database type',
    form: {
      title: 'Add conf',
      toolbar: {
        add: 'Add',
        clear: 'Clear',
        edit: 'Edit',
        test: 'Test connect'
      },
      conn: 'Connection String',
      type: 'Database type',
      encode: 'Database encode',
      host: 'Host',
      user: 'User',
      passwd: 'Password',
      warning: 'Please fill in the complete!',
      success: 'Successful add configuration!',
      test_success: 'Connection Successful!',
      test_warning: 'Response is null!',
      del: {
        title: 'Delete configuration',
        confirm: 'Determine delete this configuration?',
        success: 'Delete configuration success!',
        error: (err) => antSword.noxss(`Delete configuration failed!\n${err}`)
      },
      adddb: {
        title: 'New Database',
        dbname: 'Name',
        characterset: 'Character Set',
        charactercollation: 'Collation',
        createbtn: 'OK',
        cancelbtn: 'Cancel',
        success: 'Create database successfully',
        error: 'Failed to create database',
      },
      editdb: {
        title: 'Database Properties',
        dbname: 'Name(readonly)',
        characterset: 'Character Set',
        charactercollation: 'Collation',
        updatebtn: 'OK',
        cancelbtn: 'Cancel',
        success: 'Edit database successfully',
        error: 'Failed to edit database',
      },
      deldb: {
        title: 'Delete Database',
        confirm: (name) => antSword.noxss(`Are you sure you want to delete database ${name} ?`),
        success: 'Delete database successfully',
        error: 'Failed to delete database',
      },
      addtable: {
        title: 'New Table',
        add: 'New Column',
        delete: 'Delete Column',
        save: 'Save',
        gridheader: "Name,Type,Length,Not Null,Key,Auto Increment",
        delete_not_select: "Please select the row you want to delete first",
        save_row_is_null: "The number of rows is empty",
        cell_valid_error: (i,j)=>`Data format validation failed(row ${i+1}, col ${j+1})`,
        confirmtitle: "New table name",
        invalid_tablename: "Table names should not contain special symbols",
        success: 'Create table successfully',
        error: 'Failed to create table',
      },
      edittable: {
        title: "New table name",
        invalid_tablename: "Table names should not contain special symbols",
        success: 'Update table name successfully',
        error: 'Failed to update table',
      },
      deltable: {
        title:'Delete Table',
        confirm: (name) => antSword.noxss(`Are you sure you want to delete table ${name}?`),
        success: 'Delete table successfully',
        error: 'Failed to delete table',
      },
      addcolumn: {

      },
      editcolumn: {
        title: "New column name",
        invalid_tablename: "Column names should not contain special symbols",
        get_column_type_error: "Get column type error",
        success: 'Update column name successfully',
        error: 'Failed to update column',
      },
      delcolumn: {
        title:'Delete Column',
        confirm: (name) => antSword.noxss(`Are you sure you want to delete column ${name}?`),
        success: 'Delete column successfully',
        error: 'Failed to delete column',
      }
    },
    probedb: {
      title: 'Detect database function support',
      success: 'Check completed',
      coltype: 'ConnType',
      issupport: 'Support',
    }
  },
  settings: {
    about: {
      title: 'About',
      header: 'AntSword',
      homepage: 'Home',
      document: 'Document',
      qqgroup: 'QQ Group',
      discord: 'Discord'
    },
    language: {
      title: 'Language setting',
      toolbar: {
        save: 'Save'
      },
      form: {
        label: 'Select language'
      },
      success: 'Setting language success!',
      confirm: {
        content: 'Restart the application?',
        title: 'Setting language'
      }
    },
    update: {
      title: 'Check update',
      current: 'Current version',
      toolbar: {
        check: 'Check'
      },
      check: {
        ing: 'Check for updates..',
        fail: (err) => `Check for update failed!\n${err}`,
        none: (ver) => `After examination, no update![v${ver}]`,
        found: (ver) => `Found a new version [v${ver}]`
      },
      prompt: {
        btns: {
          ok: 'Update',
          no: 'Cancel'
        },
        body: (ver) => `Found new version v${ver}, update now?`,
        title: 'Update to version',
        changelog: 'Change Logs: ',
        sources: 'Download source: ',
        fail: {
          md5: 'File MD5 value check failed!',
          unzip: (err) => `Unzip the file failed! [${err}]`
        }
      },
      message: {
        githint: (workdir)=>`The current source is Git management, please close the program and go to ${workdir} to manually update`,
        prepare: "Connecte to server...",
        dling: (progress)=> `Downloading...${progress}%`,
        dlingnp: (size)=> `Downloading...${size}`,
        dlend: "Download completed",
        extract: "Unpacking, don't close AntSword",
        ing: 'Downloading..',
        fail: (err) => `Update failed! [${err}]`,
        success: 'Update success! Please manually restart the application later!'
      }
    },
    encoders:{
      title: 'Encoder Manager',
      toolbar: {
        new: "New",
        edit: "Edit",
        delete: "Delete",
        help: "Help",
        save: "Save",
      },
      grid: {
        ename: "Name",
        etype: "Type"
      },
      edit_win_title: "Edit Encoder",
      delete_title: "Delete Encoder",
      message: {
        ename_duplicate: "The encoder name cannot be duplicated",
        rename_success: "Rename success",
        etype_error: "Encoder type error",
        retype_success: "Modify type success",
        create_success: "Create encoder success",
        edit_not_select: "Please select the row you want to edit first",
        edit_only_single: "You can only edit one",
        edit_null_value: "Encoder content can not be empty",
        edit_save_success: "Save success",
        delete_not_select: "Please select the row you want to delete first",
        delete_success: "Delete success",
        ename_invalid: "Name can only contain numbers, letters, and underlines",
      },
      prompt: {
        create_encoder: "Create Encoder",
      },
      confirm: {
        delete: (num) => antSword.noxss(`Are you sure to delete ${typeof(num) === 'number' ? num + ' encoders' : num}?`),
      }
    },
    aproxy: {
      title: 'Proxy setting',
      toolbar: {
        save: 'Save',
        test: 'Test connect'
      },
      form: {
        label: 'Configure proxy for access to the Internet',
        mode:{
          noproxy: 'Do not use agent',
          manualproxy: 'Manually set the proxy'
        },
        proxy: {
          protocol: 'Agency agreement',
          server: 'Proxy server',
          port: 'Port',
          username: 'AuthUser',
          password: 'Password',
          authtip: 'If there is no authentication if'
        }
      },
      success: 'Save proxy settings successfully!',
      error: 'Failed to save the proxy settings!',
      confirm: {
        content: 'Restart the application to take effect, whether to restart?',
        title: 'Change proxy settings'
      },
      prompt:{
        title: 'Enter the Test-URL',
        success: 'Connect to proxy server successfully',
        error: 'Failed to connect to the proxy server'
      }
    },
    display: {
      title: 'Display setting',
      success: 'Save display settings successfully!',
      error: 'Failed to save the display settings!',
      confirm: {
        content: 'Restart the application to take effect, whether to restart?',
        title: 'Change display settings'
      },
      toolbar: {
        save: 'Save'
      },
      form:{
        shellmanager: {
          title: 'Shell Lists',
          hiddencolumns: {
            title: 'Hide selected columns',
            url: 'URL',
            ip: 'IP',
            addr: 'ADDR',
            note: 'NOTE',
            ctime: 'CTIME',
            utime: 'UTIME'
          }
        }
      }
    },
    adefault: {
      title: 'Default Setting',
      success: 'Save default settings successfully!',
      error: 'Failed to save the default settings!',
      confirm: {
        content: 'Restart the application to take effect, whether to restart?',
        title: 'Change default settings'
      },
      toolbar: {
        save: 'Save',
      },
      filemanager: {
        title: 'FileManager',
        openfileintab: {
          title: 'Open File in',
          window: 'Window',
          tab: 'Tab',
        },
        bookmark: {
          title: 'Global Bookmark',
          nodata: 'No data, click the right mouse button add',
          grid: {
            name: 'Name',
            path: 'Path'
          },
          bmenu: {
            add: 'Add Bookmark',
            del: 'Del Bookmark'
          },
          add: {
            title: 'Add to global bookmark',
            success: 'Add success',
            namedup: 'The name cannot be duplicated',
            name_invalid: 'Name is invalid',
            addbtn: 'Confirm'
          },
          del: {
            title: 'Delete Bookmark',
            confirm: (num) => antSword.noxss(`Are you sure to delete ${typeof(num) === 'number' ? num + ' Bookmarks' : num+" "}？`),
            success: 'Delete success'
          },
          edit: {
            namedup: 'The name cannot be duplicated',
            name_invalid: 'Name is invalid',
            success: 'Edit success'
          }
        },
      }
    }
  },
  plugin: {
    error: (err) => antSword.noxss(`Load Plugin Store failed!\n${err}`)
  },
  update: {
    title: 'Found updates',
    body: (ver) => `New version: ${ver}, view changelog`,

  },
  viewsite: {
    toolbar: {
      useproxy: (s) => `Proxy: ${s?'ON':'OFF'}`,
      save: 'Save',
      view: 'View'
    },
    saveSuccess: 'Save cookie configuration is successful!',
    saveFailed: (err) => `Save cookie configuration failed!\n${err}`
  }
}
