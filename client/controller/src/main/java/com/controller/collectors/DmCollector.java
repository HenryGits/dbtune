/*
 * OtterTune - OracleCollector.java
 *
 * Copyright (c) 2017-18, Carnegie Mellon University Database Group
 */

package com.controller.collectors;

import com.controller.util.JSONUtil;
import com.controller.util.json.JSONException;
import com.controller.util.json.JSONObject;
import com.controller.util.json.JSONStringer;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Map;

import org.apache.log4j.Logger;

/**
 *
 */
public class DmCollector extends DBCollector {
    private static final Logger LOG = Logger.getLogger(MySQLCollector.class);

    //    private static final String VERSION_SQL = "select banner || id_code from v$version limit 1";
    private static final String VERSION_SQL = "select *  from v$VERSION limit 1;";

    private static final String PARAMETERS_SQL = "select para_name,para_value from v$dm_ini;";

//    private static final String PARAMETERS_SQL_WITH_HIDDEN =
//            "select x.ksppinm name, y.ksppstvl value "
//                    + "from sys.x$ksppi x, sys.x$ksppcv y "
//                    + "where x.inst_id = userenv('Instance') "
//                    + "and y.inst_id = userenv('Instance') "
//                    + "and x.indx = y.indx "
//                    + "and x.ksppinm like '/_%' ESCAPE '/'";

    private static final String METRICS_SQL = "select name,stat_val from v$sysstat";

//    private static final String METRICS_SQL2 = "select stat_name, value from v$sys_time_model";

    private static final String METRICS_SQL3 = "select * from v$system_event";

    public DmCollector(String oriDBUrl, String username, String password) {
        try {
            Connection conn = DriverManager.getConnection(oriDBUrl, username, password);
            Statement statement = conn.createStatement();
            // Collect DBMS version
            ResultSet out = statement.executeQuery(VERSION_SQL);
            if (out.next()) {
                String versionStr = out.getString(1);
                int lastSpace = versionStr.lastIndexOf("V");
                String head = versionStr.substring(lastSpace + 1, versionStr.length());
//              this.version.append(out.getString(1));
                this.version.append(head);
            }

            // Collect DBMS parameters
            out = statement.executeQuery(PARAMETERS_SQL);
            while (out.next()) {
                dbParameters.put(out.getString(1).toLowerCase(), out.getString(2));
            }

            // Collect DBMS internal metrics
            String key;

            out = statement.executeQuery(METRICS_SQL);
            while (out.next()) {
                key = "sysstat." + out.getString(1).toLowerCase();
                dbMetrics.put(key, out.getString(2));
            }

//            out = statement.executeQuery(METRICS_SQL2);
//            while (out.next()) {
//                key = "sys_time_model." + out.getString(1).toLowerCase();
//                dbMetrics.put(key, out.getString(2));
//            }

            out = statement.executeQuery(METRICS_SQL3);
            ResultSetMetaData meta = out.getMetaData();
            int columnCount = meta.getColumnCount();
            String[] columnNames = new String[columnCount];
            for (int i = 0; i < columnCount; ++i) {
                columnNames[i] = meta.getColumnName(i + 1).toLowerCase();
            }
            while (out.next()) {
                String eventName = out.getString(2).toLowerCase();
                for (int i = 2; i <= columnCount; ++i) {
                    key = "system_event." + eventName + "." + columnNames[i - 1];
                    Object value = out.getObject(i);
                    dbMetrics.put(key, String.valueOf(value));
                }
            }

            conn.close();
        } catch (SQLException e) {
            LOG.error("Error while collecting DB parameters: " + e.getMessage());
            e.printStackTrace();
        }
    }

    @Override
    public String collectParameters() {
        JSONStringer stringer = new JSONStringer();
        try {
            stringer.object();
            stringer.key(JSON_GLOBAL_KEY);
            JSONObject jobLocal = new JSONObject();
            JSONObject job = new JSONObject();
            for (Map.Entry<String, String> entry : dbParameters.entrySet()) {
//                job.put(entry.getKey(), entry.getValue());
                job.put(entry.getKey().toUpperCase(), entry.getValue());
            }
            // "global is a fake view_name (a placeholder)"
            jobLocal.put("global", job);
            stringer.value(jobLocal);
            stringer.key(JSON_LOCAL_KEY);
            stringer.value(null);
            stringer.endObject();
        } catch (JSONException jsonexn) {
            jsonexn.printStackTrace();
        }
        return JSONUtil.format(stringer.toString());
    }

    @Override
    public String collectMetrics() {
        JSONStringer stringer = new JSONStringer();
        try {
            stringer.object();
            stringer.key(JSON_GLOBAL_KEY);
            JSONObject jobGlobal = new JSONObject();
            JSONObject job = new JSONObject();
            for (Map.Entry<String, String> entry : dbMetrics.entrySet()) {
                job.put(entry.getKey(), entry.getValue());
            }
            // "global" is a placeholder
            jobGlobal.put("global", job);
            stringer.value(jobGlobal);
            stringer.key(JSON_LOCAL_KEY);
            stringer.value(null);
            stringer.endObject();
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return JSONUtil.format(stringer.toString());
    }
}
